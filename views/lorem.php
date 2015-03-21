<%
$length = (int)'${length|20}';

$longFish = '';
$fish = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.';

$ratio = ceil($length / strlen($fish));

if ($ratio <= 1)
{
    echo mb_substr($fish, 0, $length);
}
else
{
    for ($i = 0; $i < $ratio; $i++)
    {
        $longFish .= ' ' . $fish;
    }
    echo mb_substr($longFish, 0, $length);
}
%>