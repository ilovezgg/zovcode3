import { useState, useEffect } from 'react';
import z from './RegionSelector.module.css'
import { supabase } from '../../../lib/supabase';

const REGIONS = [
    'Москва',
    'Санкт-Петербург',
    'Московская область',
    'Краснодарский край',
    'Свердловская область',
    'Ростовская область',
    'Республика Татарстан',
    'Челябинская область',
    'Нижегородская область',
    'Самарская область'
  ];

const RegionSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

 
  useEffect(() => {
    const fetchUserRegion = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Требуется авторизация');

      
        const { data, error: dbError } = await supabase
          .from('profiles')
          .select('address_region')
          .eq('id', user.id);

        if (dbError) throw dbError;
        
        
        if (data && data.length > 0) {
          setSelectedRegion(data[0].address_region || '');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserRegion();
  }, []);

  const handleSave = async () => {
    if (!selectedRegion) return;

    try {
      setIsLoading(true);
      setError('');

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Требуется авторизация');

     
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          address_region: selectedRegion,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'id' 
        });

      if (error) throw error;
      alert('Регион сохранен!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className={z.container}>
      <h3 className={z.title}>Выберите ваш регион</h3>
      
      {error && <div className={z.error}>{error}</div>}
      
      <div className={z.inputGroup}>
        <select
          className={z.select}
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          disabled={isLoading}
        >
          <option value=""> Выберите регион </option>
          {REGIONS.map(region => (
            <option key={region} value={region} className={z.option}>
              {region}
            </option>
          ))}
        </select>
      </div>
      
      <button
        className={`${z.button} ${isLoading ? z.buttonLoading : ''}`}
        onClick={handleSave}
        disabled={!selectedRegion || isLoading}
      >
        {isLoading ? 'Сохранение...' : 'Сохранить регион'}
      </button>
    </div>
  );
};

export default RegionSelector;