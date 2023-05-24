export async function singleSubmit(argHN: string, argVisitUID: string[]) {
  const response = await fetch('/api/singleImport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ HN: argHN, VN: argVisitUID }),
  });
  const result = await response.json();
  return result;
}
