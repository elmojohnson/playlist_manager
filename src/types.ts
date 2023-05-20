export interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: External_Urls;
    href: string;
    id: string;
    images: Images[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number
    }
    type: string;
    uri: string;
}

interface External_Urls {
    spotify: string;
}

interface Images {
    url: string;
    height?: number;
    width?: number
}

interface Owner {
    external_urls: External_Urls;
    followers: Follower[];
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name?: string;
}

interface Follower {
    href?: string;
    total: number;
}