import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function ItemsData() {
  const supabase = await createClient();
  const { data: Items } = await supabase.from("Items").select();

  return <pre>{JSON.stringify(Items, null, 2)}</pre>;
}

export default function Instruments() {
  return (
    <Suspense fallback={<div>Loading items</div>}>
      <ItemsData />
    </Suspense>
  );
}
