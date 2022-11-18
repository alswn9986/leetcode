# Write your MySQL query statement below
SELECT actor_id, director_id
FROM (
    SELECT actor_id, director_id, COUNT(pair) as counts
    FROM (
        SELECT actor_id, director_id, CONCAT(actor_id, ",", director_id) AS pair
        FROM ActorDirector
    ) AS New
    GROUP BY pair
) AS New2
WHERE counts >= 3