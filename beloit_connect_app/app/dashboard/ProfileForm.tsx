"use client";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      major: formData.get("major"),
      industry: formData.get("industry"),
      status: formData.get("status"),
      year: parseInt(formData.get("year") as string),
      profession: formData.get("profession"),
      bio: formData.get("bio"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div className="form-conatiner">
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={user?.name ?? ""} />
        </div>
        <div className="form-field">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            defaultValue={user?.firstname ?? ""}
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            defaultValue={user?.lastname ?? ""}
          />

          <label htmlFor="major">Major</label>
          <select name="major" defaultValue={user?.major ?? ""}>
            <option value="African Studies">African Studies</option>
            <option value="Ancient Mediterranean Studies">
              Ancient Mediterranean Studies
            </option>
            <option value="Anthropology">Anthropology</option>
            <option value="Art">Art</option>
            <option value="Studio art">Studio art</option>
            <option value="Asian Studies">Asian Studies</option>
            <option value="Biochemistry">Biochemistry</option>
            <option value="Biology">Biology</option>
            <option value="Environmental Biology">Environmental Biology</option>
            <option value="Business and Economics">
              Business and Economics
            </option>
            <option value="Chemistry">Chemistry</option>
            <option value="Applied Chemistry">Applied Chemistry</option>
            <option value="Environmental Chemistry">
              Environmental Chemistry
            </option>
            <option value="Chinese Language and Culture">
              Chinese Language and Culture
            </option>
            <option value="Cognitive Science">Cognitive Science</option>
            <option value="Comparative Literature">
              Comparative Literature
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Critical Identity Studies">
              Critical Identity Studies
            </option>
            <option value="Dance and Theatre">Dance and Theatre</option>
            <option value="Data Science & Data Analytics">
              Data Science & Data Analytics
            </option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science">Data Science</option>
            <option value="Economics and Business">
              Economics and Business
            </option>
            <option value="Business Economics">Business Economics</option>
            <option value="Economics">Economics</option>
            <option value="International Political Economy">
              International Political Economy
            </option>
            <option value="Quantitative Economics">
              Quantitative Economics
            </option>
            <option value="Education and Youth Studies">
              Education and Youth Studies
            </option>
            <option value="Engineering Program">Engineering Program</option>
            <option value="English">English</option>
            <option value="Creative Writing">Creative Writing</option>
            <option value="Literary Studies">Literary Studies</option>
            <option value="Environmental Studies">Environmental Studies</option>
            <option value="Environmental Communication and Arts">
              Environmental Communication and Arts
            </option>
            <option value="Environmental Justice and Citizenship">
              Environmental Justice and Citizenship
            </option>
            <option value="European Studies">European Studies</option>
            <option value="French Language and Culture">
              French Language and Culture
            </option>
            <option value="Geology">Geology</option>
            <option value="Environmental Geology">Environmental Geology</option>
            <option value="Greek and Latin Studies">
              Greek and Latin Studies
            </option>
            <option value="Health and Society">Health and Society</option>
            <option value="History">History</option>
            <option value="Interdisciplinary Studies (self-designed)">
              Interdisciplinary Studies (self-designed)
            </option>
            <option value="International Relations">
              International Relations
            </option>
            <option value="Japanese Language and Culture">
              Japanese Language and Culture
            </option>
            <option value="Journalism">Journalism</option>
            <option value="Kinesiology and Movement">
              Kinesiology and Movement
            </option>
            <option value="Latin American and Caribbean Studies">
              Latin American and Caribbean Studies
            </option>
            <option value="Law and Justice">Law and Justice</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Media Studies">Media Studies</option>
            <option value="Medieval Studies">Medieval Studies</option>
            <option value="Museum Studies">Museum Studies</option>
            <option value="Music">Music</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Physics, Engineering, and Astronomy">
              Physics, Engineering, and Astronomy
            </option>
            <option value="Engineering Physics">Engineering Physics</option>
            <option value="Physics">Physics</option>
            <option value="Political Science">Political Science</option>
            <option value="Psychology">Psychology</option>
            <option value="Sociology">Sociology</option>
            <option value="Spanish Language and Culture">
              Spanish Language and Culture
            </option>
            <option value="Theatre and Dance">Theatre and Dance</option>
            <option value="Visual Studies">Visual Studies</option>
            <option value="Engineering Programs (3-2 and 4-2)">
              Engineering Programs (3-2 and 4-2)
            </option>
            <option value="Pre-Med / Health Professions Advising">
              Pre-Med / Health Professions Advising
            </option>
            <option value="Pre-Law Preparation Advising">
              Pre-Law Preparation Advising
            </option>
          </select>

          <label htmlFor="industry">Industry</label>
          <select name="industry" defaultValue={user?.industry ?? ""}>
            <option value="Technology & Information Services">
              Technology & Information Services
            </option>
            <option value="Healthcare & Life Sciences">
              Healthcare & Life Sciences
            </option>
            <option value="Arts, Entertainment & Media">
              Arts, Entertainment & Media
            </option>
            <option value="Manufacturing & Construction">
              Manufacturing & Construction
            </option>
            <option value="Finance & Business Services">
              Finance & Business Services
            </option>
            <option value="Education & Social Services">
              Education & Social Services
            </option>
            <option value="Retail, Food & Hospitality">
              Retail, Food & Hospitality
            </option>
            <option value="Energy, Utilities & Environmental Services">
              Energy, Utilities & Environmental Services
            </option>
            <option value="Government & Public Administration">
              Government & Public Administration
            </option>
            <option value="Transportation & Logistics">
              Transportation & Logistics
            </option>
            <option value="Agriculture & Natural Resources">
              Agriculture & Natural Resources
            </option>
          </select>

          <label htmlFor="status">Status</label>
          <select name="status" defaultValue={user?.status ?? ""}>
            <option value="Alumni">Alumni</option>
            <option value="Student">Student</option>
          </select>

          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            cols={30}
            rows={10}
            defaultValue={user?.bio ?? ""}
          ></textarea>

          <label htmlFor="profession">profession</label>
          <input
            type="text"
            name="profession"
            defaultValue={user?.profession ?? ""}
          />

          <label htmlFor="year">Class Year</label>
          <input type="number" name="year" defaultValue={user?.year ?? 0} />

          <label htmlFor="image">Profile Image URL</label>
          <input type="text" name="image" defaultValue={user?.image ?? ""} />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
