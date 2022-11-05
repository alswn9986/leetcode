# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
WITH min_query AS (
    SELECT
        MIN(id)
    FROM
        Person
    GROUP BY
        email
),
cartesian_query AS (
    SELECT
        a.id
    FROM Person a, Person b
    WHERE a.email = b.email AND a.id > b.id
),
join_query AS (
    SELECT
        a.id
    FROM Person a
    INNER JOIN Person b
    ON a.email = b.email AND a.id > b.id
)

#DELETE a FROM Person a, Person b WHERE a.email = b.email AND a.id > b.id
#DELETE FROM Person WHERE id NOT IN (SELECT * FROM min_query)
DELETE FROM Person WHERE id IN (SELECT * FROM cartesian_query)
#DELETE FROM Person WHERE id IN (SELECT * FROM join_query)