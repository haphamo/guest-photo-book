import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Photo Guestbook</h1>
      <button>Upload</button>
      <input type="file" id="upload" name="upload" accept="image/png, image/jpeg, image/heic" />
    </main>
  );
}
