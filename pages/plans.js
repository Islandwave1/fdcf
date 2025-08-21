export default function Plans() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Beat Your Bill!</h1>
      <p className="mt-4">Upload your current bill and we'll beat it!</p>
      <form action="mailto:josh@islandwave.ca" method="post" encType="multipart/form-data" className="mt-6">
        <input type="file" name="bill" className="border p-2"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 ml-2">Submit</button>
      </form>
    </div>
  )
}