import { supabase } from '@/lib/supabase';
import { encodeFilePathToUrl } from '@/lib/utils';

export async function uploadFile(file: File, path: string) {
  try {
    const encodedFilePath = encodeFilePathToUrl(path);
    const { data, error } = await supabase.storage
      .from('production')
      .upload(encodedFilePath, file);
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/production${encodedFilePath}`;
  } catch (error) {
    console.log(error);
    return '';
  }
}
