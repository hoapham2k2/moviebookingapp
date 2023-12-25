import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import FetchAllNoticesFirst from "../../services/notices/FetchAllNoticesFirst";

export class Notice {
  id: number = 0;
  content: string = "";
  userId: string = "";
  createdAt: string = "";
}
export interface NoticeState {
  notices: Notice[];
}
const initialState: NoticeState = {
  notices: [],
};

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    insertNotice(state, action: PayloadAction<Notice>) {
      state.notices.push(action.payload);
    },
    setNotices(state, action: PayloadAction<Notice[]>) {
      state.notices = action.payload;
    },
  },
});

export const { insertNotice, setNotices } = noticeSlice.actions;

export default noticeSlice.reducer;
