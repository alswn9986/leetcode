# Write your MySQL query statement below
SELECT
    PLAYER_ID
    , MIN(EVENT_DATE) AS FIRST_LOGIN
FROM
    Activity
GROUP BY
    PLAYER_ID