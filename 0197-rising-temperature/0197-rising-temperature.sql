# Write your MySQL query statement below
SELECT
    id
FROM
    Weather w
WHERE
    w.temperature > (
        SELECT t.temperature
        FROM Weather t
        WHERE t.recordDate = DATE_ADD(DATE_FORMAT(w.recordDate,'%Y-%m-%d'), INTERVAL -1 DAY)
    )