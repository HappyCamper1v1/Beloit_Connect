'use client';

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      firstname: formData.get('firstname'),
      lastname:formData.get('lastname'),
      major:formData.get('major'),
      industry:formData.get('industry'),
      status:formData.get('status'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ''} />
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" defaultValue={user?.firstname ?? ''} />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" defaultValue={user?.lastname ?? ''} />
        <label htmlFor="major">Major</label>
        <select name="major" defaultValue={user?.major ?? ''}>
          <option value="Computer Science">Computer Science</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Business">Business</option>
          <option value="Psychology">Psychology</option>
        </select>
        <label htmlFor="industry">Industry</label>
        <input type="text" name="industry" defaultValue={user?.industry ?? ''} />
        <label htmlFor="status">Status</label>
        <select name="status" defaultValue={user?.status ?? ''}>
          <option value="Alumni">Alumni</option>
          <option value="Student">Student</option>
        </select>
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={user?.image ?? ''} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
