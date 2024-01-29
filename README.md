![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/135cfa4f-de98-4724-bf1d-3fccfce1ae7b) # SpringBoot + React + Firebase Project -Vintique
SpringBoot + FireBase + Firebase 를 활용한 Fullstack 웹 프로젝트 

## 💻 프로젝트 소개
SpringBoot + Firebase + React 를 활용하여 제작한 인테리어 소품을 판매하는 웹 사이트 Vintique 입니다. 
권한은 관리자와 유저로 구성되어 있으며, 관리자의 경우 주문 관리/제품 관리/권한 관리 기능을 지원하며, 
유저의 경우 장바구니/주문 관리/리뷰 관리/관심 제품 확인 기능을 지원하는 프로젝트 입니다.

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
![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/f08d780f-be40-4d4d-8874-01fc66f879d0)

- 아이디 중복확인을 통해 이미 가입된 아이디가 있는지 확인 가능
- 아이디 6자리 이상 입력하지 않을 경우 에러메세지 출력
- 비밀번호와 비밀번호 재확인이 일치하지 않으면 에러메세지 출력

---


#### 로그인
![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/8871c2d1-50d9-4286-a66d-9642dfbb2980)
- 아이디 비밀번호 일치하지 않을 경우 에러메세지 출력

  

#### 판매 페이지
![image](https://github.com/joeuni-ex/VintiqueProject/assets/141595215/89d2af3c-6e4f-47b7-80a4-50fddf0a2e21)

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
- 관심 제품 추가 가능 
- 평균 평점과 리뷰 출력 

#### 장바구니

- 휴지통 아이콘 클릭 시 장바구니에서 삭제 가능
- Payment 버튼 클릭 시 주문 완료 


#### 마이페이지
##### 주문관리
- 장바구니를 통해 주문 완료 된 주문 목록 조회
- 상세 조회 클릭 시 해당 주문 건의 상세 제품들 확인 가능
- 리뷰 작성 버튼 클릭 시 리뷰 모달창 출력
- 리뷰 작성 완료 시 리뷰작성 -> 리뷰작성완료로 변경
  
##### 리뷰관리
- 작성한 리뷰 목록 확인 가능
- 리뷰 수정 가능
- 리뷰 삭제 가능

  
##### 관심제품
- 관심 제품 목록 확인 가능
- 관심 제품 삭제 가능

  
##### 권한관리
- 관리자 비밀번호 입력 시 유저 -> 관리자로 권한 변경 가능
- 권한 변경 후 재 로그인 필요 
- 현재 비밀번호 : 1234

#### 관리자페이지
##### 주문관리
- 모든 유저의 주문 목록을 확인 가능
- 상세 조회 클릭 시 상세 조회 가능
- 배송 현황 변경 가능
  
##### 제품관리
- 현재 판매 등록된 제품 목록 확인 가능 
- 제품 추가/수정/삭제 가능
  
##### 권한관리
- 관리자 비밀번호 입력 시 관리자 -> 유저로 권한 변경 가능
- 권한 변경 후 재 로그인 필요 
- 현재 비밀번호 : 1234


#### 배포주소 
- https://vintique-joeuni.netlify.app/
