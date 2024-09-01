import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styles from './lotto-past/lotto-past.module.scss'; // Import your CSS Module
import { LottoListModel, Response } from '@/model/lotto-list.model';

interface LottoDropdownProps {
  lottoList: LottoListModel;
  onSelect: (selectedId: string) => void; // Callback for when an option is selected
}

const LottoDropdown: React.FC<LottoDropdownProps> = ({ lottoList, onSelect }) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedId(selectedValue);
    onSelect(selectedValue); // Call the callback function with the selected ID
  };

  return (
    <FormControl fullWidth className={styles.lottoSelectDate}>
      <InputLabel id="lotto-select-label" className={styles.lottoCurrentInputLabel}>
        เลือกงวดประจำวันที่
      </InputLabel>
      <Select
        labelId="lotto-select-label"
        value={selectedId || ''}
        onChange={handleSelectChange}
        className={styles.lottoSelectDateForm}
        label="เลือกงวดประจำวันที่"
      >
        <MenuItem value="" disabled>
          กรุณาเลือกงวด
        </MenuItem>
        {lottoList.response.map((item: Response) => (
          <MenuItem key={item.id} value={item.id}>
            {item.date}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LottoDropdown;
