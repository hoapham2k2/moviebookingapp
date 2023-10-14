CREATE or replace FUNCTION func_select_movie_detail(
    id_movie integer
)
returns setof tbl_movie
language plpgsql
as $function$
begin
    return query
    -- select random 2 movies from tbl_movie (postgresql)
    select * 
    from tbl_movie
    where id = id_movie
    limit 1;

end;
$function$;