CREATE or replace FUNCTION func_select_release()
returns setof tbl_movie
language plpgsql
as $function$
begin
    return query
    -- select random 2 movies from tbl_movie (postgresql)
    select * from tbl_movie
    order by random()
    limit 2;
end;
$function$;
