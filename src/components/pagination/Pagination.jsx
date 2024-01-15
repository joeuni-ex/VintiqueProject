import "./Pagination.css";

const Pagination = ({ page, setPage, totalPage }) => {
  const maxDisplayedPages = 3; //최대로 출력할 페이지 개수

  //next 버튼 클릭 시
  const handleChangePlusPage = () => {
    setPage(page + 1); //페이지 증가
  };

  //prev 버튼 클릭 시
  const handleChangeMinusPage = () => {
    //페이지가 0과 같으면 페이지 변경없이 리턴한다.
    if (page === 0) return;
    else if (page > 0) {
      setPage(page - 1); //페이지 감소
    }
  };

  //페이지 변경
  const handleChangePage = (page) => {
    setPage(page);
  };

  // 페이지 번호 생성
  const generatePageNumbers = () => {
    const pageNumbers = []; //페이지 번호 빈 배열

    const start = Math.max(0, page - Math.floor(maxDisplayedPages / 2)); //시작 페이지 번호

    const end = Math.min(totalPage - 1, start + maxDisplayedPages - 1); //끝 페이지 번호

    //시작 번호에서 끝 번호까지 페이지 출력
    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        //배열에 페이지 번호 넣음
        <div
          key={i}
          onClick={() => handleChangePage(i)}
          className={page === i ? "pageNumberBtnSelected" : "pageNumberBtn"}
        >
          {i + 1}
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <div onClick={handleChangeMinusPage} className="pageBtn">
        &#8592; Prev
      </div>
      {generatePageNumbers()}
      <div onClick={handleChangePlusPage} className="pageBtn">
        Next &#8594;
      </div>
    </div>
  );
};

export default Pagination;
