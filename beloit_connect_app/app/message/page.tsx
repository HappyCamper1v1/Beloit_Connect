import { getServerSession } from "next-auth";

export default async function message() {
  return (
    <main>
      <div className="message-container">
        <div className="users-box">
          <h2>users</h2>
        </div>
        <div className="message-log-box"></div>
      </div>
    </main>
  );
}
