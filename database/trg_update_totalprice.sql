-- pgsql
-- viết 1 function để cập nhật cột total_price trong bảng tbl_order khi thêm, xóa, sửa bảng tbl_ticket

create or replace function update_total_price()
returns trigger
language plpgsql
as $function$
begin
    update tbl_order
    set total_price = (
                        select sum(price) 
                        from tbl_ticket 
                        where tbl_ticket.order_id = tbl_order.id)
    where tbl_order.id = new.order_id; -- new là 1 biến đặc biệt trong trigger, chứa dữ liệu của bản ghi mới được thêm vào bảng
    return new;
end;
$function$;


--viết 1 trigger để gọi function trên khi thêm, xóa, sửa bảng tbl_ticket
create trigger update_total_price
after insert or update or delete on tbl_ticket
for each row
execute procedure update_total_price();

