export default function ConvertCategoryIntoList(category: string): string[] {
  const list = category.split(",");
  //check list có chứa phần tử rỗng không
  const index = list.indexOf("");
  if (index !== -1) {
    list.splice(index, 1);
  }

  return list;
}
