import React from "react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between">
          <div className="flex justify-between basis-6/12">
            <a href="#!">이용약관</a>
            <a href="/policy" target="_blank" className="privacy">
              개인정보처리방침
            </a>
            <a
              href="/business-information"
              target="_blank"
              className="business"
            >
              사업자정보확인
            </a>
            <a
              href="#!"
              target="_blank"
              rel="noreferrer noopener"
              className="recruiter"
            >
              인재채용
            </a>
            <a href="#!" target="_blank" className="join">
              입점문의
            </a>
            <a href="#!" target="_blank" className="admin">
              셀러어드민
            </a>
          </div>
          <div className="flex justify-between basis-5/12">
            <a href="/faq" className="question">
              자주묻는 질문
            </a>
            <a
              href="#!"
              target="_blank"
              rel="noreferrer noopener"
              className="kakao"
            >
              플러스친구
            </a>
            <a
              href="#!"
              target="_blank"
              rel="noreferrer noopener"
              className="facebook"
            >
              페이스북
            </a>
            <a
              href="#!"
              target="_blank"
              rel="noreferrer noopener"
              className="instagram"
            >
              인스타그램
            </a>
          </div>
        </nav>
        <address className="division">
          <div className="inner">
            <div className="infos-company">
              <h1 className="tit-h1">
                <a href="#brandi-info" className="more-brandi">
                  (주)브랜디
                </a>
              </h1>
              <div id="brandi-info" className="infos">
                <div className="bundle">
                  <span className="part">대표이사 : 서정민</span>
                  <span className="part">사업자등록번호 : 220-88-93187</span>
                  <span className="part">
                    통신판매업신고 : 2023-서울성동-1739
                  </span>
                </div>
                <div className="bundle">
                  <span className="part">호스팅사업자 : (주)브랜디</span>
                  <span className="part">
                    주소 : 서울 성동구 왕십리로 125, 11층(성수동1가, 케이디타워)
                  </span>
                </div>
              </div>
              <p className="alert">
                브랜디는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가
                등록한 상품정보 및 거래에 브랜디는 책임을 지지 않습니다.
              </p>
            </div>
            <div className="infos-cs">
              <h2 className="tit-h1">
                고객센터
                <a href="#!" className="cs-tel">
                  1566-6575
                </a>
              </h2>
              <div className="info">
                <h3 className="tit-h2">영업시간</h3>
                <p>AM 10:00 ~ PM 17:00(주말 및 공휴일 휴무)</p>
              </div>
              <div className="info">
                <h3 className="tit-h2">점심시간</h3>
                <p>PM 12:30 ~ PM 13:30</p>
              </div>
              <div className="info">
                <h3 className="tit-h2">고객문의</h3>
                <a href="#!" className="cs-email">
                  brandics@brandi.co.kr
                </a>
              </div>
            </div>
          </div>
        </address>
      </div>
    </footer>
  );
}
