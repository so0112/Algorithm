/** 
REST_INFO  : 식당정보
REST_REVIEW : 식당 리뷰

 1. 서울에 위치한 식당 ID 식당 이름, 음식 종류, 즐겨찾기 수, 주소, 리뷰 평균 점수
 2. 리뷰 평균 점수는 소수점 세번째 자리에서 반올림 
 3. 평균점수 기준으로 내람차순
 4. 평균점수 같을 경우 즐겨찾기 수를 기준으로 내림차순 정렬 
**/



SELECT  
    A.REST_ID,
    A.REST_NAME,
    A.FOOD_TYPE,
    A.FAVORITES,
    A.ADDRESS,
    ROUND(AVG(B.REVIEW_SCORE), 2) AS AVG_SCORE
FROM REST_INFO A INNER JOIN REST_REVIEW B 
    ON A.REST_ID = B.REST_ID
WHERE A.ADDRESS LIKE '서울%'
GROUP BY A.REST_ID, A.REST_NAME, A.FOOD_TYPE, A.FAVORITES, A.ADDRESS
ORDER BY AVG_SCORE DESC, A.FAVORITES DESC;
