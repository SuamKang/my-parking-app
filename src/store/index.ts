// import { updateTokenStore } from './authSlice';
// // zustand store 생성
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice } from "./authSlice";
import { createMyPageSlice } from "./MyPageSlice";
import { createProductSlice } from "./ProductSlice";

export const useBoundStore = create<AuthSlice & MyPageSlice & ProductSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createMyPageSlice(...a),
        ...createProductSlice(...a),
      }),
      {
        name: "boundStore",
        partialize: (state) => ({
          userToken: state.userToken,
          userBasicInfo: state.userBasicInfo,
          isLoggedIn: state.isLoggedIn,
        }),
      }
    )
  )
);
