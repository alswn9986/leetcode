# Write your MySQL query statement below
select next_id as id
     , student
from (
select id as pre_id
     , case 
        when MOD(ID,2) = 1 AND (id = (select max(id) from seat)) then id
        when MOD(ID,2) = 1 then (id+1)
        when MOD(ID,2) = 0 then (id-1)
    end as next_id
    , student 
from seat
) as a
order by next_id asc