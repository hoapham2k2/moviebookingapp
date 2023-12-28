import supabase from "../../config/supabase/supabase";
import { Notice } from "../../features/notices/noticeSlice";


/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Get all notices from database
  </summary>
*/
export default async function FetchAllNoticesFirst(): Promise<Notice[]> {
  const { data, error } = await supabase
    .from("tbl_notification")
    .select()
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }
  let notices: Notice[] = [];
  if (data) {
    console.log("fetch notice", data);

    //data correction
    data.forEach((notice) => {
      notices.push({
        id: notice.id.toString(),
        content: notice.text,
        userId: notice.user_id,
        createdAt: notice.created_at,
      });
    });
  }
  return notices;
}
