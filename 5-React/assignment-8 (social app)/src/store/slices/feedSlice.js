import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { v4 as uuidv4 } from 'uuid';

// updatepost

export const updatePost = createAsyncThunk("feed/updatePost", async (post) => {
  try {
    const docRef = doc(db, "posts", post.id);
    await updateDoc(docRef, post);
    return post;
  } catch (error) {
    console.log("error", error);
  }
});

// deletePost

export const deletePost = createAsyncThunk("feed/deletePost", async (id) => {
  try {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    console.log("error", error);
  }
});

export const getPosts = createAsyncThunk("feed/getPosts", async () => {
  try {
    const collectionRef = collection(db, "posts");
    const queryRef = query(
      collectionRef,
      where("title", "!=", "post1"),
      orderBy("title")
    );

    const docs = await getDocs(queryRef);
    let data = [];

    docs.forEach((doc) => {
      const docData = doc.data();

      data.push({
        id: doc.id,
        ...doc.data(),
        createAt:
          docData.createAt instanceof Timestamp
            ? docData.createAt.toDate().getTime()
            : docData.createAt, // Keep as-is if not a Timestamp
      });
    });

    return data;
  } catch (error) {
    console.log("Error in getPosts:", error);
  }
});

export const createPost = createAsyncThunk("feed/createPost", async (post) => {
  try {
    post.setLoading(true);
    const file = post.file;
    const fileRef = ref(
      storage,
      "socialAppMedia/" + uuidv4() + "-" + file.name
    );
    const metadata = {
      contentType: file.type,
    };

    await uploadBytes(fileRef, file, metadata);
    const url = await getDownloadURL(fileRef);
    console.log("url: ", url);

    let updatedPost = {
      title: post.title,
      description: post.description,
      createAt: Date.now(),
      imageURL: url,
    };

    const collectionRef = collection(db, "posts");
    const response = await addDoc(collectionRef, updatedPost);
    console.log("response after firebase store", response);
    post.setLoading(false);
  } catch (error) {
    console.error("Create post error:", error);
  }
});

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [], // Initialize feed as an empty array
    updatePost: null,
  },
  reducers: {
    addFeed: (state, action) => {
      console.log("action in addFeed", action.payload);
    },
    updateDocId: (state, action) => {
      console.log("action in updateDocId", action.payload);
      let post = state.feed.filter((post) => post.id === action.payload);
      state.updatePost = post[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.feed = [action.payload, ...state.feed];
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.feed = action.payload || [];
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.feed = state.feed.filter((post) => post.id !== action.payload);
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.feed = state.feed.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
      state.updatePost = null;
    });
  },
});

export const { addFeed, updateDocId } = feedSlice.actions;
export default feedSlice.reducer;
