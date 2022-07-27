import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import Post from './Post';

const cx = classNames.bind(styles);

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        first_name: '💃 Nightlife',
        last_name: 'Girl 💃',
        full_name: '💃 Nightlife Girl 💃',
        nickname: 'nightlifegirl',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
        bio: 'Quẩy lên :)',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 15:34:44',
        updated_at: '2022-05-05 16:12:44',
      },
      {
        id: 2,
        first_name: 'Đào Lê',
        last_name: 'Phương Hoa',
        full_name: 'Đào Lê Phương Hoa',
        nickname: 'hoaahanassii',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: true,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:10:05',
        updated_at: '2022-05-05 16:11:39',
      },
      {
        id: 3,
        first_name: 'Đinh',
        last_name: 'Trang Thảo',
        full_name: 'Đinh Trang Thảo',
        nickname: 'dinhtrangthao03',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
        bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:13:28',
        updated_at: '2022-05-05 16:14:23',
      },
      {
        id: 5,
        first_name: 'CiiN',
        last_name: 'NN',
        full_name: 'CiiN NN',
        nickname: 'cciinnn',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/5/62739690f19f3.jpg',
        bio: 'KOLs/Dancer - BNdanceteam\nFB: Bùi Thảo Ly (Sịn) - IG: l.ciin\n👇🏻MONEY COVER👇🏻',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:17:39',
        updated_at: '2022-05-05 16:19:13',
      },
    ]);
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
