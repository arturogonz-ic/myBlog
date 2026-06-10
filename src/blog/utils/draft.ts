export function isDraft(body: string): boolean {
	return body.trim().startsWith('<!-- draft -->');
}
