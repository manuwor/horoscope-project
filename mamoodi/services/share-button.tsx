import React from 'react';
import styles from "./share-button.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
interface ShareButtonProps {
  title: string;
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for unsupported browsers
      alert('คัดลอกลิงก์สำเร็จ');
      navigator.clipboard.writeText(url);
    }
  };


  return (
    <>
      <button onClick={handleShare} className={styles.shareButton}>
        แชร์ <FontAwesomeIcon icon={faShare} className={styles.shareIcon}></FontAwesomeIcon>
      </button>
    </>
  );
};

export default ShareButton;
