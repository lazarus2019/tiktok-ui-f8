import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import * as searchService from '../../../services/searchService';

import styles from './Home.module.scss';
import Post from './Post';

const cx = classNames.bind(styles);

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      let result;
      result = await searchService.suggestAccounts('i');
      setPosts(result);
      console.log(result)
    };

    fetchApi();
  }, []);

  return (
    <div className={cx('post-container')}>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default Home;
