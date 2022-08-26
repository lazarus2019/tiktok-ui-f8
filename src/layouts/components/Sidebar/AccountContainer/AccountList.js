import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AccountContainer.module.scss';
import AccountItem from '../../../../components/AccountItem';
import * as searchService from '../../../../services/searchService';

const cx = classNames.bind(styles);

function AccountList({ type }) {
  const [accounts, setAccounts] = useState([]);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      let result;
      switch (type) {
        case 'suggest':
          result = await searchService.suggestAccounts('i');
          break;
        case 'following':
          result = await searchService.suggestAccounts('h');
          break;
        default:
          throw new Error('Type must be required');
      }
      setAccounts(result);
    };

    fetchApi();
  }, [type]);

  const renderAccounts = () => {
    if (showFull) {
      return accounts.map((account) => <AccountItem className={cx('tiny')} key={account.id} data={account} />);
    } else {
      return accounts
        .slice(0, 2)
        .map((account) => <AccountItem className={cx('tiny')} key={account.id} data={account} />);
    }
  };

  return (
    <>
      {renderAccounts()}
      <p className={cx('button')} onClick={() => setShowFull(!showFull)}>
        {showFull ? 'See less' : 'See all'}
      </p>
    </>
  );
}

AccountList.prototype = {
  type: PropTypes.string.isRequired,
};

export default AccountList;
