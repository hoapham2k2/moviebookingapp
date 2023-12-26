import supabase from "../../config/supabase/supabase";
import { Notice } from "../../features/notices/noticeSlice";

export default async function FetchAllNoticesFirst(): Promise<Notice[]> {
  const { data, error } = await supabase
    .from("tbl_notification")
    .select()
    .order("created_at", { ascending: false }); //order by created_at desc

  if (error) {
    throw error;
  }
  let notices: Notice[] = [];
  if (data) {
    console.log("fetch notice", data);

    //data correction
    data.forEach((notice) => {
      notices.push({
        id: notice.id.toString(), //id is number in supabase
        content: notice.text,
        userId: notice.user_id,
        createdAt: notice.created_at,
      });
    });
  }
  return notices;
}
