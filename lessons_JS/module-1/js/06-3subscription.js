/*
Напиши скрипт проверки подписки пользователя при доступе к контенту
-Есть три типа подписки: free, pro и vip
*/

// если пользователь pro или vip, тогда есть доступ

const sub = 'pro';
const canAccessContent = sub === 'pro' || sub === 'vip';
console.log('Есть доступ к уонтенту?', canAccessContent);
