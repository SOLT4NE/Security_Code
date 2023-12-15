const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    setInterval(() => checkAllMembers(client), 3000); 
});

function checkAllMembers(client) {
    client.guilds.cache.forEach(guild => {
        guild.members.fetch().then(members => {
            members.forEach(member => {
                // console.log(`${member.user.username},${member.nickname},${member.user.globalName}`)
                if (((member.user.username === 'Pio' || member.nickname === 'Pio' || member.user.globalName === 'Pio') && member.user.id !== '813073832297758771') 
                || ((member.user.username === 'Chilearmy123 (Clemente) (Green)' || member.nickname === 'Chilearmy123 (Clemente) (Green)' || member.user.globalName === 'Chilearmy123 (Clemente) (Green)') && member.user.id !== '798263652301144084') 
                || ((member.user.username === 'Easy | Dog on the Internet' || member.nickname === 'Easy | Dog on the Internet' || member.user.globalName === 'Easy | Dog on the Internet') && member.user.id !== '433301376169410561') 
                || ((member.user.username === 'NFTNICK' || member.nickname === 'NFTNICK' || member.user.globalName === 'NFTNICK') && member.user.id !== '815259457936293951')
                || ((member.user.username === 'Kix' || member.nickname === 'Kix' || member.user.globalName === 'Kix') && member.user.id !== '110543183624015872')  
                || ((member.user.username === 'Tofu (Elite K9)' || member.nickname === 'Tofu (Elite K9)' || member.user.globalName === 'Tofu (Elite K9)') && member.user.id !== '881726290099572807')
                || ((member.user.username === 'GuaposSweater' || member.nickname === 'GuaposSweater' || member.user.globalName === 'GuaposSweater') && member.user.id !== '202502536031240192') 
                || ((member.user.username === 'sxei' || member.nickname === 'sxei' || member.user.globalName === 'sxei') && member.user.id !== '465899856498786324')
                || ((member.user.username === 'dirtbag1212' || member.nickname === 'dirtbag1212' || member.user.globalName === 'dirtbag1212') && member.user.id !== '433054214680346624')
                || ((member.user.username === 'allyson' || member.nickname === 'allyson' || member.user.globalName === 'allyson') && member.user.id !== '807026877667475537')
                || ((member.user.username === 'popcan' || member.nickname === 'popcan' || member.user.globalName === 'popcan') && member.user.id !== '134398812759261184') 
                || ((member.user.username === 'SwineFlu' || member.nickname === 'SwineFlu' || member.user.globalName === 'SwineFlu') && member.user.id !== '179765114554023937') 
                || ((member.user.username === 'wu (i own the best bodoggo)' || member.nickname === 'wu (i own the best bodoggo)' || member.user.globalName === 'wu (i own the best bodoggo)') && member.user.id !== '305727331736223745')  ) {                    // Ban the member
                    member.ban({ reason: 'Username/nickname is not allowed' })
                        .then(() => console.log(`Banned ${member.user.tag} for prohibited username/nickname`))
                        .catch(err => console.error(err));

                        const channelId = '921601482976002088';
                        const channel = member.guild.channels.cache.get(channelId);
                        
                        if (!channel) return;
                        const usernameOrNickname = member.nickname || member.user.username;
                        const userId = member.user.id;
                        const welcomeMessage = `banned ${usernameOrNickname} (ID: <@${userId}>)! tryna scam mf`;                    
                        channel.send(welcomeMessage);
                }
            });
        }).catch(err => console.error(err));
    });
}


client.login('MTE4NDI1NzI3MzQwMTQ0MjM3NQ.G414l7.Dfg5_ILfaSn9Y62LDsEQexVexWkHOkqjW-76M8');


