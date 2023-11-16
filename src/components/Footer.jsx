import React from "react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between">
          <div className="flex justify-between basis-6/12">
            <a href="#">이용약관</a>
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
              href="https://www.brandiinc.com/recruit/"
              target="_blank"
              rel="noreferrer noopener"
              className="recruiter"
            >
              인재채용
            </a>
            <a
              href="https://pf.kakao.com/_pSxoZu"
              target="_blank"
              className="join"
            >
              입점문의
            </a>
            <a
              href="http://admin.brandi.co.kr"
              target="_blank"
              className="admin"
            >
              셀러어드민
            </a>
          </div>
          <div className="flex justify-between basis-5/12">
            <a href="/faq" className="question">
              자주묻는 질문
            </a>
            <a
              href="https://pf.kakao.com/_xexkxcxkl"
              target="_blank"
              rel="noreferrer noopener"
              className="kakao"
            >
              플러스친구
            </a>
            <a
              href="https://www.facebook.com/brandiapp/"
              target="_blank"
              rel="noreferrer noopener"
              className="facebook"
            >
              페이스북
            </a>
            <a
              href="https://www.instagram.com/brandi__official"
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
              <p className="link-text">
                <b>안전거래센터</b>
                <a
                  href="https://sites.google.com/brandi.co.kr/safety/%ED%99%88?authuser=0 "
                  target="_blank"
                >
                  신고하기
                </a>
              </p>
              <div className="markArea isms">
                <div className="footMark"></div>
                <div className="markInfo">
                  <div className="markText iRange">
                    <strong>인증범위</strong>
                    <p>
                      온라인 쇼핑몰 서비스 운영 (브랜디, 하이버, 플레어,
                      서울스토어) (심사받지 않은 물리적 인프라 제외)
                    </p>
                  </div>
                  <div className="markText iDue">
                    <strong>유효기간</strong>
                    <p>2022-12-07 ~ 2025-12-06</p>
                  </div>
                </div>
              </div>
              <div className="markArea escrow">
                <a
                  href="https://pg.nicepay.co.kr/issue/IssueEscrow.jsp?Mid=combran01m&amp;CoNo=2208893187"
                  target="_blank"
                  className="footMark"
                ></a>
                <div className="markInfo">
                  <div className="markText">
                    <p>
                      당사는 고객님의 안전거래를 위해 관련 법률에 의거하여
                      나이스페이먼츠의 에스크로 서비스를 적용하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="infos-cs">
              <h2 className="tit-h1">
                고객센터
                <a href="tel:15666575" className="cs-tel">
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
                <a href="mailto:brandics@brandi.co.kr" className="cs-email">
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
