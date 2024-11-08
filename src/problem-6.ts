{
    interface Profile {
        name: string;
        age: number;
        email: string;
      }
      
      function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
      }
      
      // Sample usage:
      const myProfile = { 
        name: "Alice", 
        age: 25, 
        email: "alice@example.com"
     };
     
const NewObj:Profile=(updateProfile(myProfile, { email: 'Shikh@zia.com' }));

console.log(NewObj)
      
}