# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
DELETE FROM Person
WHERE id IN (
    SELECT id
    FROM (
        SELECT p.id
        FROM Person p
        INNER JOIN Person p2
        ON p.Email = p2.Email AND  p.Id > p2.Id
    ) t
)