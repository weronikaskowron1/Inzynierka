import { supabase } from '../Images/supabase';

const uploadAvatar = async (uri: string, userId: string) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const filePath = `avatars/${userId}.jpg`;

    const { error } = await supabase.storage
      .from('avatars')
      .upload(filePath, blob, {
        contentType: 'image/jpeg',
        upsert: true,
      });

    if (error) {
      throw error;
    }

    console.log('Zdjęcie wrzucone:', filePath);

    return filePath;
  } catch (error) {
    console.error('Błąd uploadu:', error);
    return null;
  }
};