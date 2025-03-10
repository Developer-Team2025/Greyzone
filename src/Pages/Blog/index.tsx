
import classNames from 'classnames';
import styles from './style.module.scss'; 
import ReactPaginate from 'react-paginate';
import static_value from './card.json'
import { useEffect, useState } from 'react';
import WOW from 'wow.js'
const Index = () => {
  const [page, setPage] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected;
    setPage(newPage)
  };

  useEffect(() => {
    const wow = new WOW({
      live: false, // Prevent rescanning the DOM unnecessarily
    });
    wow.init();
  }, [page]); // Reinitialize WOW.js on page change
  return (
    <section className={styles.blogs} id="blogs">
      <div className={styles.container}>
        <h1 className={classNames(styles.title, styles.blogs__title, 'wow', 'animate__animated','animate__fadeInLeft')}>
          <span>Blog</span>
        </h1>
        <div className={classNames(styles.blogs__tags, 'wow', 'animate__animated','animate__fadeInUp')}>
          <div className={styles.post_tags}></div>
        </div>
          {
            static_value[page].map((data, index)=>{
              return(
                <div className={classNames(styles.blogs__wrapper,'wow', 'animate__animated', 'wow-delay')} key={index}>
                  <div className={classNames(styles.blogs__item, 'wow', 'animate__animated','animate__fadeInUp')} onClick={() => {window.location.href = data.href}}>
                    <picture className={styles.blogs__pic}>
                      <a >
                        <img
                          src={`${import.meta.env.VITE_REDIRECT}${data.img}`}
                          alt="data"
                        />
                      </a>
                    </picture>
                    <div className={styles.blogs__content}>
                      <span className={styles.blogs__date}>{data.date}</span>
                      <a  className={styles.blogs__name}  >
                        {data.name}
                      </a>
                      <p className={styles.blogs__desc}>
                        {data.desc}
                      </p>
                    </div>
                  </div>
                  {
                    data && data.content.map((val, idx)=>{
                      return(
                        <div className={classNames(styles.blogs__item2, 'wow', 'animate__animated','animate__fadeInUp')} onClick={() => {window.location.href = val.href}} key={idx}>
                          <picture className={styles.blogs__pic}>
                            <a>
                              <img
                                src={`${import.meta.env.VITE_REDIRECT}${val.img}`}
                                alt={idx.toString()}
                              />
                            </a>
                          </picture>
                          <div className={styles.blogs__content}>
                            <span className={styles.blogs__date}>{val.date}</span>
                            <a
                              className={styles.blogs__name}
                              
                            >
                              {val.name}
                            </a>
                            <p className={styles.blogs__desc}>
                              {val.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        <ReactPaginate
          previousLabel={'«'}
          nextLabel={'»'}
          breakLabel={'...'}
          pageCount={static_value.length}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={classNames(styles.pagination, 'wow', 'animate__animated','animate__fadeInUp')}
          pageClassName={styles.page_item}
          pageLinkClassName={'page-link'}
          previousClassName={styles.prev_item}
          nextClassName={styles.next_item}
          activeClassName={styles.active}
        />
      </div>
    </section>
  );
};

export default Index;
