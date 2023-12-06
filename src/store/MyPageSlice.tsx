// import { create } from "zustand";
import {StateCreator} from 'zustand'

//index.ts Store에서 AuthSlice를 참조하기 때문에 types 파일에 AuthSlice를 넣었습니다. 

export const createMyPageSlice: StateCreator<
MyPageSlice, 
[]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
> = (set) => ({
  personalInfo: {} as UserInfoType,
})
