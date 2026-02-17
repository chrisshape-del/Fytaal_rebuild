import { Link } from 'react-router-dom';
import { FileText, Settings, ArrowRight, LayoutGrid, List } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { servicesData } from '../data/services';

export default function Dashboard() {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Welkom terug, Doriene</h1>
            <p className="text-slate-500 mb-8">Beheer hier de inhoud van de Fytaal website.</p>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-8 p-1 bg-slate-100 rounded-xl">
                    <TabsTrigger value="overview" className="px-6 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Overzicht</TabsTrigger>
                    <TabsTrigger value="pages" className="px-6 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Alle Paginas</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Quick Actions */}
                        <Link to="/admin/pages/home" className="block h-full">
                            <Card className="h-full hover:shadow-md transition-shadow hover:border-primary/50 cursor-pointer group">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <CardTitle>Homepage</CardTitle>
                                    <CardDescription>Pas de teksten en secties aan.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-slate-500">
                                        Beheer hero, reviews en meer.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center text-sm font-bold text-primary">
                                        Ga naar editor <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>

                        <Link to="/admin/pages/aanbod" className="block h-full">
                            <Card className="h-full hover:shadow-md transition-shadow hover:border-primary/50 cursor-pointer group">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <LayoutGrid className="w-6 h-6" />
                                    </div>
                                    <CardTitle>Aanbod</CardTitle>
                                    <CardDescription>Bewerk je diensten.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-slate-500">
                                        Fysiotherapie, PT, Hyrox, etc.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center text-sm font-bold text-primary">
                                        Ga naar editor <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>

                        <Link to="/admin/settings" className="block h-full">
                            <Card className="h-full hover:shadow-md transition-shadow hover:border-primary/50 cursor-pointer group">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Settings className="w-6 h-6" />
                                    </div>
                                    <CardTitle>Instellingen</CardTitle>
                                    <CardDescription>Algemene site opties.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-slate-500">
                                        Contactgegevens & Socials.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center text-sm font-bold text-primary">
                                        Aanpassen <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    </div>
                </TabsContent>

                <TabsContent value="pages">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pagina Overzicht</CardTitle>
                            <CardDescription>Selecteer een pagina om te bewerken</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {['Home', 'Aanbod', 'Team', 'Aanpak', 'Contact', 'Rooster'].map((page) => (
                                    <Link key={page} to={`/admin/pages/${page.toLowerCase()}`}>
                                        <Button variant="outline" className="w-full h-auto py-4 justify-start px-6 hover:border-primary hover:text-primary transition-all group">
                                            <div className="bg-slate-100 p-2 rounded-md mr-4 group-hover:bg-primary/10">
                                                <List className="w-5 h-5 text-slate-500 group-hover:text-primary" />
                                            </div>
                                            <span className="font-semibold text-lg">{page}</span>
                                            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Button>
                                    </Link>
                                ))}

                                {/* Service Pages Divider */}
                                <div className="md:col-span-2 lg:col-span-3 mt-4 mb-2">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Diensten</h3>
                                </div>

                                {Object.keys(servicesData).map((slug) => (
                                    <Link key={slug} to={`/admin/pages/service/${slug}`}>
                                        <Button variant="outline" className="w-full h-auto py-4 justify-start px-6 hover:border-primary hover:text-primary transition-all group">
                                            <div className="bg-blue-50 p-2 rounded-md mr-4 group-hover:bg-primary/10">
                                                <List className="w-5 h-5 text-blue-500 group-hover:text-primary" />
                                            </div>
                                            <span className="font-semibold text-lg capitalize">{slug.replace(/-/g, ' ')}</span>
                                            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
