import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

type Lesson = {
  id: string;
  title: string;
  duration: string;
}

type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
}
type Course = {
  id: number;
  modules: Module[];
}

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;
}

const INITIAL_STATE: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: true,
};

export const loadCourse = createAsyncThunk(
  'player/loadCourse',
  async () => {
    const response = await api.get<Course>('/courses/1')

    return response.data
  }
);

export const playerSlice = createSlice({
  name: "player",
  initialState: INITIAL_STATE,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },

    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex];

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;

        return;
      }

      const nextModuleIndex = state.currentModuleIndex + 1;
      const nextModule = state.course?.modules[nextModuleIndex];

      if (nextModule) {
        state.currentModuleIndex = nextModuleIndex;
        state.currentLessonIndex = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload
      state.isLoading = false;
    });
  },
});

export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
};
