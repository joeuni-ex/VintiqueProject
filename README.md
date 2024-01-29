# SpringBoot + React + Firebase Project -Vintique
SpringBoot + FireBase + Firebase 를 활용한 Fullstack 웹 프로젝트 

## 💻 프로젝트 소개
SpringBoot + Firebase + React 를 활용하여 제작한 인테리어 소품을 판매하는 웹 사이트 Vintique 입니다. 
권한은 관리자와 유저로 구성되어 있으며, 관리자의 경우 주문 관리/제품 관리/권한 관리 기능을 지원하며, 
유저의 경우 장바구니/주문 관리 /리뷰 관리/ 관심 제품 기능을 지원하는 프로젝트 입니다.

![image](https://github.com/joeuni-ex/React_BookMarket/assets/141595215/9f612236-7095-4403-8a79-be87060aab25)

## :raising_hand:개발인원
- 개인 프로젝트(1명)

## ⚙️개발환경
**Front-end**
- React (Vite)
- axios 라이브러리로 서버통신 관리
  
**Back-end**
- SpringBoot
- Jpa
- Rest Api
- MySQL
- Firebase


## 📌주요기능

#### 회원가입
- 아이디 중복확인을 통해 이미 가입된 아이디가 있는지 확인 가능
- 아이디 6자리 이상 입력하지 않을 경우 에러메세지 출력
- 비밀번호와 비밀번호 재확인이 일치하지 않으면 에러메세지 출력
- https://vintique-joeuni.netlify.app/signup
  

#### 로그인
- 아이디 비밀번호 일치하지 않을 경우 에러메세지 출력 

#### 판매 페이지
- ![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/89d2af3c-6e4f-47b7-80a4-50fddf0a2e21)

- 카테고리 별 조회 가능
- Show 의 숫자 변경으로 한 페이지에 원하는 개수의 제품만 출력 가능
- Short by로 가격 높은 순, 낮은 순 정렬 옵션 지원 

##### 장바구니/ 관심제품추가 (비회원 사용 불가)
![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/2bd57bb2-8899-45b8-9687-f7c25afcb434)

- 각 제품에 커서를 올려 View를 클릭하여 상세페이지로 이동 가능
- Cart 클릭 시 장바구니에 해당 제품 추가
- Like 클릭 시 관심제품에 해당 제품 추가
- ![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/432666c8-5b6a-42b2-b01a-fc70de338ad3)

- 이미 관심제품에 추가되어있는 제품일 경우 아이콘 색상 변경 및 관심 제품에서 삭제 가능

#### 상세 페이지 
![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/9f7e3dd7-fc3e-4181-8fe7-895287f738ca)
- 원하는 수량 선택 후 Add To Cart 버튼을 통해 장바구니에 추가 가능( 선택 수량은 재고를 넘을 수 없음 )
- 

#### 장바구니


#### 마이페이지

##### 주문관리
##### 리뷰관리
##### 관심제품
##### 권한관리

#### 관리자페이지
##### 주문관리
##### 제품관리
##### 권한관리


#### 배포주소 
- https://vintique-joeuni.netlify.app/
