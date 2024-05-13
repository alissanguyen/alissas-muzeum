import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls: string[] = [
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
  "https://utfs.io/f/f5815374-5070-463e-9386-a48cb94af517-1x475r.png",
  "https://utfs.io/f/84cdd2eb-3e53-4b23-88c1-c4fe6d4048f5-1x475u.png",
  "https://utfs.io/f/a3f2e009-7bd2-4cda-a131-02f014dece26-1x475w.png",
  "https://utfs.io/f/6b69e506-6925-403b-9527-07293e6bf333-1x475v.png",
  "https://utfs.io/f/313df38c-0af5-4f0e-b2ae-a5f4d04944d5-1x475x.png",
  "https://utfs.io/f/6b161ac7-798e-40f9-999d-9c2d57f4dd7c-bihvxr.png",
  "https://utfs.io/f/5f6ee4a4-af67-46ca-9a3f-ad2a1bb6ebd7-1x475t.png",
]

const mockImages = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url
  }
})

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts)
  
  return (
    <main className="p-10 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
        {mockImages.map((image) =>
          <div className="mx-auto" key={image.id}><img src={image.url} alt="" className="w-48" /></div>)}
      </div>
    </main>
  );
}
