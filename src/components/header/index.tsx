import { InputAdornment, Link, TextField } from '@mui/material';
import styles from './styles.module.scss';
import { AuthenticatedUser } from '../../mock';
import { useState } from 'react';
import { AppNavigation } from '../../mock/app_header';

export function AppHeader() {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <header className={styles.AppHeader}>
      <div className={styles.AppHeaderContainer}>
        <span
          className={styles.AppLogo}
          style={{
            backgroundImage: `url(/assets/images/N-Power-Logo-removebg.png)`
          }}
        />
        <div className={styles.links}>
          {AppNavigation.map((appNavigator) => {
            return (
              <Link
                href={`/${appNavigator.slug ?? appNavigator.name}`}
                key={appNavigator.name}
                className={`${styles.link} ${
                  appNavigator.lists == null ? styles.withEffect : ''
                }`}
              >
                {appNavigator.name}
              </Link>
            );
          })}
        </div>
        <TextField
          value={searchText}
          variant={'outlined'}
          className={styles.searchInputBox}
          color="success"
          InputProps={{
            startAdornment: (
              <InputAdornment position={'start'}>
                {/*<BiSearchAlt />*/}
              </InputAdornment>
            )
          }}
          placeholder={'Search our library courses'}
          onChange={({ target: { value } }) => {
            setSearchText(value);
          }}
        />
        <div className={styles.UserProfile}>
          <p className={styles.UserName}>
            {`Hi ${AuthenticatedUser.firstName}`}
          </p>
          <span
            className={styles.UserImage}
            style={{ backgroundImage: `url(${AuthenticatedUser.profilePic})` }}
          />
        </div>
      </div>
    </header>
  );
}
