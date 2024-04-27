export class ItunesResponse {
  resultCount: number;
  results: ItunesResult[];
}

export class ItunesResult {
  wrapperType: string;
  kind: string;
  trackId: number;
  trackName: string;
  trackViewUrl: string;
  trackCensoredName: string;
  trackPrice: number;
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  collectionId: number;
  collectionName: string;
  collectionCensoredName: string;
  collectionViewUrl: string;
  collectionPrice: number;
  collectionExplicitness: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  releaseDate: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
}