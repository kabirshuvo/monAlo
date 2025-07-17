import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Lesson {
  id: string;
  title: string;
  content: string;
}

interface Course {
  _id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

interface CourseState {
  course: Course | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CourseState = {
  course: null,
  status: 'idle',
  error: null,
};

export const fetchCourseById = createAsyncThunk<Course, string>(
  'courses/fetchCourseById',
  async (id) => {
    const response = await fetch(`/api/courses/${id}`);
    if (!response.ok) throw new Error('Failed to fetch course');
    const data: Course = await response.json();
    return data;
  }
);

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourseById.fulfilled, (state, action: PayloadAction<Course>) => {
        state.status = 'succeeded';
        state.course = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default courseSlice.reducer;
