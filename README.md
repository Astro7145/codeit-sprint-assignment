# 사용 기술
![Static Badge](https://img.shields.io/badge/Next.js-black.svg?style=for-the-badge&logo=next.js&logoColor=%23FFFFFF)
![Static Badge](https://img.shields.io/badge/typescript-%233178C6?style=for-the-badge&logo=typescript&logoColor=%23FFFFFF)
![Static Badge](https://img.shields.io/badge/React_Query-%23FF4154?style=for-the-badge&logo=reactquery&logoColor=%23FFFFFF)

# 프로젝트 설명
프로젝트 설명에서는 제가 과제를 진행하면서 고민했던 몇 가지 부분들에 대해서 적어가겠습니다.

## FSD 아키텍처
<img width="303" height="506" alt="image" src="https://github.com/user-attachments/assets/1a3fdbb6-fd8d-41d7-a206-ff8989c67de1" />

우선 이번 프로젝트에서는 FSD 아키텍처를 도입하여 각 컴포넌트들을 관리했습니다. \
FSD 아키텍처는 규모가 크고 복잡한 프로젝트에 적합하다고 배우긴 했지만, FSD 아키텍처에 대해 경험을 쌓고 감각을 익히고자 채택하게 되었습니다.

## 디자인 시스템
<img width="278" height="737" alt="image" src="https://github.com/user-attachments/assets/f27b3fea-4c17-4e15-8627-fd003ca85d7b" />
<img width="409" height="370" alt="image" src="https://github.com/user-attachments/assets/ef13c61f-3a59-425c-b8ea-470b061239df" />

피그마에 명시되어 있는 디자인 시스템에 따라 Tailwind CSS, Next.js의 LocalFont 등을 활용하여 프로젝트에 적용시켰습니다. \
또한, 각종 버튼 및 인풋 상자 등의 공통 컴포넌트도 프로젝트에 설정된 디자인 시스템을 활용하여 구현할 수 있었습니다. \

<img width="388" height="83" alt="image" src="https://github.com/user-attachments/assets/505482da-696f-4b9c-96a7-d2424fd3c84f" />

하지만 버튼의 음영 부분 등의 복잡한 부분까지 구현하기에는 저의 역량 부족으로 인해 시간이 오래 걸릴 것 같아 최대한 요구사항에만 부합하도록 디테일한 부분들을 생략했습니다.

<img width="692" height="409" alt="image" src="https://github.com/user-attachments/assets/6ab26af9-dbce-43be-9676-f3fe61b3c2ad" />

디자인 시스템에 명시된 아이콘 부분은 대체적으로 컴포넌트화 시켜서 활용했습니다.
이런 방식을 사용하면 아이콘의 크기나 색상 등을 유동적으로 변경할 수 있기에 자주 활용하고 있습니다.

## SSR & CSR



# 사용 설명
접속 링크 - 

## 렌딩 페이지
<img width="1920" height="992" alt="image" src="https://github.com/user-attachments/assets/cf765051-baf3-4d99-84b7-7e3e8eb4d091" />

**todo 추가 상자**
<img width="1180" height="86" alt="image" src="https://github.com/user-attachments/assets/f9d10fbf-f2a9-4f6f-8dd8-4560a8d96d2d" />
<img width="1191" height="74" alt="image" src="https://github.com/user-attachments/assets/9a0e4a46-56ea-45c4-b02d-988522f9493d" />

렌딩 페이지 가장 상단에 있는 todo 입력 상자입니다. \
기본적으로 제출 버튼은 비활성화 되어 있으며, 텍스트를 입력할 경우 활성화 됩니다. \
텍스트 입력 후 클릭하면 Todo 목록에 추가되며, Enter 키를 입력해서도 제출 가능합니다.

**todo 목록**
<img width="1180" height="585" alt="image" src="https://github.com/user-attachments/assets/1cdabac2-7020-4ac2-bc12-ba97c13d352d" />

할 일 목록은 Todo와 Done으로 나누어져 있으며, 각각 진행 중인 상태와 완료된 상태를 의미합니다. \

<img width="581" height="64" alt="image" src="https://github.com/user-attachments/assets/ac3f3a43-60ee-442b-8111-35642485885a" />
<img width="584" height="67" alt="image" src="https://github.com/user-attachments/assets/7c26738e-92f3-4127-b487-7a91862c56c3" />

각 목록의 열은 하나의 todo를 나타내며, 좌측 끝에는 진행 상태를 스위칭 할 수 있는 체크박스가 있습니다. \
또한, todo의 이름을 클릭하면 해당 todo의 상세 페이지로 이동할 수 있습니다.

## 상세 페이지
<img width="1920" height="992" alt="image" src="https://github.com/user-attachments/assets/ceb19bcc-14be-44a0-b857-f1a05832b245" />
<img width="1920" height="991" alt="image" src="https://github.com/user-attachments/assets/59f474a1-0997-4f5e-9f06-d0241fa35760" />

각 todo의 상세 페이지 입니다. \
상세 페이지에서는 todo의 이름, 진행 상태, 이미지 및 메모 등의 내용을 수정할 수 있습니다.

**진행 상태 및 이름 수정**
<img width="1028" height="82" alt="image" src="https://github.com/user-attachments/assets/0a631a12-f4ef-4dd1-ad76-56f39cc83871" />

좌측의 체크 박스를 통해 진행 상태를 변경할 수 있으며 todo 이름을 클릭하면 해당 내용도 수정 가능합니다.

**이미지 수정**
<img width="422" height="334" alt="image" src="https://github.com/user-attachments/assets/9435376c-95fe-4c64-a2e0-9609e132a936" />
<img width="413" height="341" alt="image" src="https://github.com/user-attachments/assets/14232d26-9968-4d94-b9c6-dc3d8350f2b3" />


기본적으로 등록된 사진이 없을 경우 placeholder 이미지를 출력하며, 우측 하단의 버튼을 클릭하여 개인 PC에서 이미지를 불러올 수 있습니다. \
이미지는 파일 탐색기를 통해 불러옴와 동시에 용량, 확장자, 이름 등의 검사를 통해 S3에 업로드 되게 됩니다.

**메모 수정**
<img width="622" height="337" alt="image" src="https://github.com/user-attachments/assets/46a96d03-b2a4-4c0b-990a-4e446841e8b0" />

메모 또한 수정 가능합니다.

**수정 완료 버튼**
<img width="1233" height="554" alt="image" src="https://github.com/user-attachments/assets/826f8313-00b8-4381-8a79-ec2034a34024" />

기본적으로 수정된 내용이 없으면 수정 완료 버튼이 비활성화 되도록 구현했습니다. \
(해당 부분에 대한 규칙은 따로 명시된 내용이 없어 제가 임의로 정한 규칙입니다.)

<img width="1229" height="574" alt="image" src="https://github.com/user-attachments/assets/7a463da1-c034-4224-aa1d-825b994eb778" />
<img width="1215" height="564" alt="image" src="https://github.com/user-attachments/assets/75046eb4-68b9-46d7-a0d8-e7009c180b80" />
<img width="1220" height="540" alt="image" src="https://github.com/user-attachments/assets/29ee5e8b-5e7e-4424-8912-3e3fabd9312f" />

위와 같이 한 군데라도 변경 사항이 생긴다면 버튼이 활성화 됩니다.

<img width="1231" height="611" alt="image" src="https://github.com/user-attachments/assets/a4337adc-d197-4a27-a058-cf309aeabece" />

이후 수정 완료 버튼을 클릭하면 alert와 함께 todo 목록으로 이동하게 됩니다.

**삭제하기 버튼**
<img width="1216" height="602" alt="image" src="https://github.com/user-attachments/assets/50f6150a-04db-4889-aa1a-19a7a8a14059" />

삭제하기 버튼을 클릭하면 삭제 확인 창이 표시되며, 확인 버튼을 클릭할 경우 todo 목록에서 삭제되고 페이지도 todo 목록으로 돌아가게 됩니다.

<img width="1246" height="590" alt="image" src="https://github.com/user-attachments/assets/467e53b2-b5f2-443c-9b38-fce52924c02f" />

