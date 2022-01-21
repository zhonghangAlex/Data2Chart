import crypto from 'crypto';
export default function(str: Buffer):string{
    let md5 = crypto.createHash('md5');
    md5.update(str);
    return md5.digest('hex');
}